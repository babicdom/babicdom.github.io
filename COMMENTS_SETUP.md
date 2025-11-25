# Comment System Setup Guide

## Step 1: Enable GitHub Discussions

1. Go to your repository: https://github.com/babicdom/babicdom.github.io
2. Click on **Settings** tab
3. Scroll down to the **Features** section
4. Check the box next to **Discussions** to enable it
5. Click **Set up discussions** if prompted

## Step 2: Configure Giscus

1. Visit https://giscus.app/
2. Enter your repository: `babicdom/babicdom.github.io`
3. Choose **Discussion Category**: Select "General" or create a new category for comments
4. Choose **Feature**: Leave default settings or customize as needed
5. The tool will generate configuration values that look like:
   ```
   data-repo="babicdom/babicdom.github.io"
   data-repo-id="R_kgDOLK1234"  # Replace with your actual repo ID
   data-category="General"
   data-category-id="DIC_kwDOLK1234"  # Replace with your actual category ID
   ```

## Step 3: Update the Comment Component

After getting your actual repository and category IDs from giscus.app, update the file:
`src/components/Comments.astro`

Replace the placeholder values:
- `data-repo-id="R_kgDOLK1234"` with your actual repo ID
- `data-category-id="DIC_kwDOLK1234"` with your actual category ID

## Features

- ✅ Works perfectly with GitHub Pages (static hosting)
- ✅ Uses GitHub authentication (users need GitHub accounts)
- ✅ Comments stored as GitHub Discussions
- ✅ Dark theme matches your site
- ✅ Reactions and moderation tools
- ✅ No external dependencies or databases needed
- ✅ Free and open source

## Alternative Options

If you prefer different comment systems:

### Utterances (simpler, uses GitHub Issues)
```html
<script src="https://utteranc.es/client.js"
        repo="babicdom/babicdom.github.io"
        issue-term="pathname"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
```

### Disqus (more features, requires account)
```html
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.pathname;
};
</script>
```