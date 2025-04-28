# Deploying to Vercel

Follow these steps to deploy your Personal Profile website to Vercel:

## Prerequisites
1. Create a [GitHub](https://github.com/) account if you don't have one already
2. Create a [Vercel](https://vercel.com/) account using your GitHub account

## Steps to Deploy

### 1. Push your code to GitHub
1. Create a new repository on GitHub
2. Initialize Git in your project (if not already done):
   ```
   git init
   ```
3. Add all files to Git:
   ```
   git add .
   ```
4. Commit your changes:
   ```
   git commit -m "Initial commit"
   ```
5. Set the remote repository URL:
   ```
   git remote add origin https://github.com/yourusername/personal-profile.git
   ```
6. Push your code to GitHub:
   ```
   git push -u origin master
   ```

### 2. Deploy with Vercel
1. Go to [Vercel](https://vercel.com/) and log in with your GitHub account
2. Click on "Add New..." and select "Project"
3. Import your GitHub repository (personal-profile)
4. Keep the default settings (Vercel will automatically detect that it's a React app)
5. Click "Deploy"
6. Wait for the deployment to finish
7. Your site will be available at a URL like `https://personal-profile-yourusername.vercel.app`

### 3. Connect Your Custom Domain (Optional)
1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the instructions to configure DNS

## Troubleshooting
- If you encounter routing issues, ensure the `vercel.json` file is properly set up with rewrites
- If build fails, check the build logs for specific errors