# Development Commands

## Local (desktop)
```bash
# clone and enter
git clone https://github.com/your-user/stackrunner.git
cd stackrunner

# Web Demo
cd stackrunner-web-demo
npm install
npm run dev

# Deploy
vercel --prod
```

## Android (Termux)
```bash
pkg install git nodejs
curl -O https://raw.githubusercontent.com/your-user/stackrunner/main/android/setup_stackrunner.sh
bash setup_stackrunner.sh
```
