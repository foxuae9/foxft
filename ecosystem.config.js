module.exports = {
  apps: [{
    name: "foxft",
    script: "npm",
    args: "start",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    deploy: {
      production: {
        user: 'foxft',
        host: 'foxft',
        ref: 'origin/main',
        repo: 'git@github.com:foxuae9/foxft.git',
        path: '/home/foxft/webapps/foxft/current',
        'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js'
      }
    }
  }]
}
