# GitHub Setup Instructions

## 1. Update Git Remote

First, update the remote URL with your actual GitHub username:

```bash
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/SmartPharm.git
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## 2. Create Repository on GitHub

If you haven't created the repository yet:

1. Go to https://github.com/new
2. Repository name: `SmartPharm`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## 3. Push to GitHub

```bash
git push -u origin main
```

## 4. Enable GitHub Pages

### Option A: Using GitHub Actions (Recommended - Already Set Up)

The repository includes a GitHub Actions workflow that will automatically deploy to GitHub Pages when you push to the `main` branch.

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically run on the next push to `main`

### Option B: Using gh-pages Branch (Alternative)

If you prefer using the `gh-pages` branch:

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Run: `npm run deploy`
3. Go to Settings → Pages and select `gh-pages` branch

## 5. Update Base Path (If Needed)

If your repository name is different from "SmartPharm", update the base path in `vite.config.js`:

```javascript
base: '/YOUR_REPO_NAME/',
```

## 6. Access Your Site

After deployment, your site will be available at:
- `https://YOUR_GITHUB_USERNAME.github.io/SmartPharm/`

## Troubleshooting

- If the site shows a 404, wait a few minutes for GitHub Pages to build
- Check the Actions tab to see if the deployment workflow is running
- Make sure the repository is set to **Public** (free GitHub Pages requires public repos)

