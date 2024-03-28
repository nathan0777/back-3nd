
export const sqlConfig = {
    server: '192.168.1.3',
    port: 1433,
    user: 'sa',
    password: 'nathanana',
    database: 'TAREFAS',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 5000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
  }
  