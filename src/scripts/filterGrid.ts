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

    const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const items = document.querySelectorAll<HTMLElement>(itemSelector);
    const resultsCount = document.getElementById(resultsCountId);
    const noResults = document.getElementById(noResultsId);
    const grid = document.getElementById(gridId) as HTMLElement;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-emerald-500/15', 'text-emerald-700', 'border-emerald-500/50');
                b.classList.add('bg-gray-100/50', 'text-gray-500', 'border-gray-300/50');
            });
            btn.classList.add('active', 'bg-emerald-500/15', 'text-emerald-700', 'border-emerald-500/50');
            btn.classList.remove('bg-gray-100/50', 'text-gray-500', 'border-gray-300/50');

            let visibleCount = 0;
            items.forEach(item => {
                const tags: string[] = JSON.parse(item.getAttribute('data-tags') || '[]');
                const show = filter === 'all' || tags.includes(filter!);
                item.style.display = show ? 'block' : 'none';
                if (show) visibleCount++;
            });

            if (resultsCount) {
                resultsCount.textContent = `${visibleCount} ${visibleCount !== 1 ? labelPlural : labelSingular} found`;
            }
            if (noResults && grid) {
                noResults.classList.toggle('hidden', visibleCount > 0);
                grid.style.display = visibleCount > 0 ? 'grid' : 'none';
            }
        });
    });
}
