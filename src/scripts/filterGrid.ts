interface FilterOptions {
    itemSelector: string;
    gridId: string;
    noResultsId: string;
    resultsCountId: string;
    labelSingular: string;
    labelPlural: string;
}

export function initFilter(options: FilterOptions) {
    const { itemSelector, gridId, noResultsId, resultsCountId, labelSingular, labelPlural } = options;

    const setup = () => {
        // Module scripts run once per session, but the DOM is replaced on every
        // client-side navigation — so listeners are (re)bound on astro:page-load.
        // The guard keeps a listener registered by another page from firing here.
        const grid = document.getElementById(gridId);
        if (!grid) return;

        const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
        const items = document.querySelectorAll<HTMLElement>(itemSelector);
        const resultsCount = document.getElementById(resultsCountId);
        const noResults = document.getElementById(noResultsId);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');

                filterBtns.forEach(b => {
                    b.classList.toggle('active', b === btn);
                    b.setAttribute('aria-pressed', String(b === btn));
                });

                let visibleCount = 0;
                items.forEach(item => {
                    const tags: string[] = JSON.parse(item.getAttribute('data-tags') || '[]');
                    const show = filter === 'all' || tags.includes(filter!);
                    item.style.display = show ? '' : 'none';
                    if (show) visibleCount++;
                });

                if (resultsCount) {
                    resultsCount.textContent = `${visibleCount} ${visibleCount !== 1 ? labelPlural : labelSingular} found`;
                }
                if (noResults) {
                    noResults.classList.toggle('hidden', visibleCount > 0);
                    grid.style.display = visibleCount > 0 ? '' : 'none';
                }
            });
        });
    };

    document.addEventListener('astro:page-load', setup);
}
