import * as firebaseAdmin from 'firebase-admin';
import { firebaseConfig } from './config'

export class FirebaseClass {

    constructor(){
        console.log("Firebase Project: ", project2.databaseURL)
        firebaseAdmin.initializeApp(project2)
    }

    public getInstance() {
        return firebaseAdmin
    }
}


let project1 = {
    credential: firebaseAdmin.credential.cert({
        projectId: "red-central",
        clientEmail: "firebase-adminsdk-54tdt@red-central.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDblsX/to28TEUc\nX2YcGuR6aRyNcuUVfzpHITx+XmbBsY6xot8MczNyf8VwZa6Uft6NQ+q7ybXBqUdj\n0vAFngRZ1aDDj3qlWsI474/uUgRQVlzDtS9vfZWDNEsQB8tux4R3gv3H9GpSBhQi\nRtmB6hMrSLWBRyzYQqgxLovnsMld1LJ/+8dxi/xhohgLoR/MZ4x+Yt7wu8VVsIju\nXa1Bdwbuq/VQxFuZlLGiC3hIyTIjEgsFcz3uSP+gEtZf9/lkztU4AXOmJPKQBkZv\nJktEADvaTHpT8anRuliqwT8nEOTJ/7VbRifaAsROEK5t+X/hNr9o2/fFdFDd3LqV\nWXHiPW2BAgMBAAECggEAINrxk6XvFZAs3AarGsPsUSN2hfR9scZ4RAnFSRwbUFpe\ngRYfPPfkp/pVopBYO3gzGNxjXAcddpU7LQSz7Ic82+sik3gdj+2hN08i0DP92L5f\nQVoT96DI9NlnbMXZyqC4IYCcM6WOneiybQGATFenWBfYLnhljZMFotw1yywQqQTh\n135ZGJxti/7UcT01mDV4EEr4t3qSPp0Dlv3cXuf2DhzuZjU1RrI+5Sgx+6bJz3KZ\nMJDP53X3r1LpcClsJkkRXwm0YX1aSiFF895beDNelZ+XaGMFxKLD+c2qkf3qDxzT\nI1GRzALt4yIrNflfDqBvJzN35e9PKakCGVjDBSrE9QKBgQD0c96K8ujz8BJtGmu3\nzc+MSquwXRI6T8BVJoqEx1HgAr/3002kvzDqu/Hr/h3pyYFyqcW9sn7QqLz+RFY6\nAeM+xW8+yU/6s9JecghTjWFA0L3/WwMuFMq5j1J7eFgqkV3AnLdGM7EM2nfbgPYp\nApES4QQhIjRfomxf4youHgaNPQKBgQDl9jtB1au9+0Xj/1/SVLuJ3VbVVLQ1YWXa\n8256xDB4chfgPxj2x2VwWzHHPt47T0mbNL7UjxnaIvAwcIJ+6nt+HOlhXRprP2N9\nppOusLE/h5IzJvkrkL+y7wimTs+Yj9i3OcdDZ91zfjiah9vbppAQIDUrOIZiIh31\nvlkAHJetlQKBgQC+iwLQs/85BcyXFp0YLGi3Jg0l76YhpcB5nw0h6mu7fOk9t4sx\n+4WZst4j4XRXoyYvxn3IG7YV1zFZ0NKVbJtBdov8GNcqx7gWvjQXTICeERfIT5zu\n8m4CreDRNUEkDSNS29VP90LujewXQTKfTMzgNl0NpqfEU8q+A0gBoo3g0QKBgQCA\nGxzFvx+OlVVI/zHFPTjAQ5KlAyvk9N5GDAiG0ZZi8sREQ0JH76qd3d+sLGSmy7Oo\nh8irJxDyyTXe9j5sL3oeNkL432HhTw3AqLRqw7nqNz8FyfdTAq8YIjtCUnMpfTDw\nWXqdHVZriWxFAdxDz9U/doHIExQhxPnFtYVlH4iLxQKBgQDS9tMlOvOnQQkZVuii\niQcZ4tUCwLiiXrxGV48PHMQT0KgkH2pFg8ssW5sIweI4yRS4s0FhKarsS2TmRQJb\nhjSxrw+zQPRQ8qIZ1NdMj88bhCb3A31SRyPIHOqMTfcsRj8xirEgqSEzDr6IcUvs\nB4PPMLpF+aXyY1w2/GpGYeeoew==\n-----END PRIVATE KEY-----\n"
    }),
    databaseURL: "https://red-central.firebaseio.com"
}

let project2 = {
    credential: firebaseAdmin.credential.cert({
        projectId: "employeecontrol-ef7e3",
        clientEmail: "firebase-adminsdk-0f816@employeecontrol-ef7e3.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCIq5OJB5YYRA+S\nG3aD1kpmZ8obnTuhrWXjKWhMEpwFe8FX2j0X3cxdWp3Vop5Xs4MPgyHCleg6Lgci\nR+C9JVCKv6kXqCiquhjAQSkm/kMvF2yEeQiz7TWjT8aZLkMieELSsSiTvWskk7R7\nQYeiiE+oItmcnCdlY20MF3ZUGkIgFb+Jhi5P8fjybddqeMMDvMKoEdVUnh7SzINd\nei8W5d/fW7Z5NbGCjqp0KcJm8KmX/UD+cmLtnm+IQVI6pE+njoKWIanXvWeKKm3O\nvSzXTP4wp++KvRVm/AozyRPmKu2XsruoSSQVhGNsV1tTAGmOvXOQjaF1sVGVwyu/\niMjJHVPZAgMBAAECggEAB2dhbwtLKqCymz6uSpwW8bnuV//06rWjDw2qNHIkTk5o\nU025AOGndZM4I7T95lBiPuU4CfuRq2fc7mgobkwRiJgIyAWjFln4h0nAZKK3mbB8\n1NGzEqmSE056EB2nzhE9GtQ1bN4rv2faX3xVpbdutp6/XTLpwMivGqLsFR2gYW6C\nk6xbPkRGbJHHCCIUyUg4o04x8V6AWjeiR9VKBCfAYp/NJB6TrrRUPffVTFuYGIyE\nL/khQiclxoEnE/0mqD/Sb6M1aiBvR4IftWol4IlugP6uzN/LsOxcLt9qiRR32x35\nQ39K1E3MET7MSv/0dKCl0kYOJP3b7M0Fzjv/Z0C+UQKBgQC/yVIUwej4FL+a2uep\nWnfnZ4/BgkAMwQxXFvWl10Q2LNWJcrbNDxgN97PJhT/vZMd4nNMWpnnFHW42ffF/\n1u4F912l1pGugqsRBbmayJ19jsGU6LVjfmzk2sZzOMZZwtK5w3lrRYJ2knZo8cAW\nvy2NMp3VAMPeYCYpjqs2p54MfQKBgQC2bg5AEAE21h52TNAHzQJI0KLFhamugujs\nyeCsntohgqHhqAiCPx0VaQ8U9xDDg/LW4yx28bduL5UzEK9yxPu5ND4ox0fWvbQ/\nnZet10MNYF26ZcEuxJ9o/YNCWd60mPehdEk+sbnXMTVqhdz6DfNHCudVBZ6rF4yG\nUYUG4FOvjQKBgBWAyQcyxqAqE2GVcav3TMJRRjj4FZ5Ydr29AUXa4PcCB98lUYGk\nU5odT7ckjYqVzhej3bcIa1bCefz6Gf2vZ3ibx5A0gpkCZZO/BJRqMd5GB0Ze4ReK\nsULnlKCOmQ6vXVkepZp1bK9GtKgHkvX58W2HY1LihxODzEOUj3XNTVcxAoGAC87f\n2UGv8m61lg6uwHKCnVfz0TkvnH4YuYrvofy+PcEI3WRU+KlBJqugMEk1qpIV29bk\nf+Zxaw5lZ+LCmHkrmfdJtrX/bmTlD+ERek0ep/T+3BvN/0r2zoLqRhcvFR15mde/\nDfHPB6DFxllXzk+s2YJZKuWsOYLSs7b/F0zZ3dkCgYBYNk06GtwR5GmrAfa8Qa11\nN3voWAyp87YQBojSh/22uGDEjpeszeT4BPVSL++NdssY55OixwaWUIA4Aao2qk0+\nBJfDrxnFmGO5k/VCUqiLsUrk4ATunA8L5vx9+ZHs21no+Hbz0UZMx7nkilSlLHpX\nLO6q/4Yp0ggggh9/rdhkBg==\n-----END PRIVATE KEY-----\n"
    }),
    databaseURL: "https://employeecontrol-ef7e3.firebaseio.com/"
}
