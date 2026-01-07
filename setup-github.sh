#!/bin/bash

# GitHub Setup Script for SmartPharm
# This script helps you set up the GitHub remote and push your code

echo "🚀 SmartPharm GitHub Setup"
echo ""

# Check if remote is already set
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")

if [[ "$CURRENT_REMOTE" == *"YOUR_USERNAME"* ]] || [[ -z "$CURRENT_REMOTE" ]]; then
    echo "Please enter your GitHub username:"
    read GITHUB_USERNAME
    
    if [ -z "$GITHUB_USERNAME" ]; then
        echo "❌ GitHub username is required. Exiting."
        exit 1
    fi
    
    echo ""
    echo "Setting remote to: https://github.com/$GITHUB_USERNAME/SmartPharm.git"
    git remote set-url origin "https://github.com/$GITHUB_USERNAME/SmartPharm.git"
    echo "✅ Remote updated!"
else
    echo "✅ Remote is already configured: $CURRENT_REMOTE"
    GITHUB_USERNAME=$(echo "$CURRENT_REMOTE" | sed -n 's|.*github.com/\([^/]*\)/.*|\1|p')
fi

echo ""
echo "📦 Current status:"
git remote -v
echo ""

echo "Next steps:"
echo "1. Make sure you've created the 'SmartPharm' repository on GitHub"
echo "2. Run: git push -u origin main"
echo "3. Go to Settings → Pages in your GitHub repo"
echo "4. Select 'GitHub Actions' as the source"
echo ""
echo "Your site will be available at:"
echo "https://$GITHUB_USERNAME.github.io/SmartPharm/"

