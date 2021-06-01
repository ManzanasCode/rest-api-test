"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseInstance = void 0;
const firebaseAdmin = __importStar(require("firebase-admin"));
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        projectId: "red-central",
        clientEmail: "firebase-adminsdk-54tdt@red-central.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDblsX/to28TEUc\nX2YcGuR6aRyNcuUVfzpHITx+XmbBsY6xot8MczNyf8VwZa6Uft6NQ+q7ybXBqUdj\n0vAFngRZ1aDDj3qlWsI474/uUgRQVlzDtS9vfZWDNEsQB8tux4R3gv3H9GpSBhQi\nRtmB6hMrSLWBRyzYQqgxLovnsMld1LJ/+8dxi/xhohgLoR/MZ4x+Yt7wu8VVsIju\nXa1Bdwbuq/VQxFuZlLGiC3hIyTIjEgsFcz3uSP+gEtZf9/lkztU4AXOmJPKQBkZv\nJktEADvaTHpT8anRuliqwT8nEOTJ/7VbRifaAsROEK5t+X/hNr9o2/fFdFDd3LqV\nWXHiPW2BAgMBAAECggEAINrxk6XvFZAs3AarGsPsUSN2hfR9scZ4RAnFSRwbUFpe\ngRYfPPfkp/pVopBYO3gzGNxjXAcddpU7LQSz7Ic82+sik3gdj+2hN08i0DP92L5f\nQVoT96DI9NlnbMXZyqC4IYCcM6WOneiybQGATFenWBfYLnhljZMFotw1yywQqQTh\n135ZGJxti/7UcT01mDV4EEr4t3qSPp0Dlv3cXuf2DhzuZjU1RrI+5Sgx+6bJz3KZ\nMJDP53X3r1LpcClsJkkRXwm0YX1aSiFF895beDNelZ+XaGMFxKLD+c2qkf3qDxzT\nI1GRzALt4yIrNflfDqBvJzN35e9PKakCGVjDBSrE9QKBgQD0c96K8ujz8BJtGmu3\nzc+MSquwXRI6T8BVJoqEx1HgAr/3002kvzDqu/Hr/h3pyYFyqcW9sn7QqLz+RFY6\nAeM+xW8+yU/6s9JecghTjWFA0L3/WwMuFMq5j1J7eFgqkV3AnLdGM7EM2nfbgPYp\nApES4QQhIjRfomxf4youHgaNPQKBgQDl9jtB1au9+0Xj/1/SVLuJ3VbVVLQ1YWXa\n8256xDB4chfgPxj2x2VwWzHHPt47T0mbNL7UjxnaIvAwcIJ+6nt+HOlhXRprP2N9\nppOusLE/h5IzJvkrkL+y7wimTs+Yj9i3OcdDZ91zfjiah9vbppAQIDUrOIZiIh31\nvlkAHJetlQKBgQC+iwLQs/85BcyXFp0YLGi3Jg0l76YhpcB5nw0h6mu7fOk9t4sx\n+4WZst4j4XRXoyYvxn3IG7YV1zFZ0NKVbJtBdov8GNcqx7gWvjQXTICeERfIT5zu\n8m4CreDRNUEkDSNS29VP90LujewXQTKfTMzgNl0NpqfEU8q+A0gBoo3g0QKBgQCA\nGxzFvx+OlVVI/zHFPTjAQ5KlAyvk9N5GDAiG0ZZi8sREQ0JH76qd3d+sLGSmy7Oo\nh8irJxDyyTXe9j5sL3oeNkL432HhTw3AqLRqw7nqNz8FyfdTAq8YIjtCUnMpfTDw\nWXqdHVZriWxFAdxDz9U/doHIExQhxPnFtYVlH4iLxQKBgQDS9tMlOvOnQQkZVuii\niQcZ4tUCwLiiXrxGV48PHMQT0KgkH2pFg8ssW5sIweI4yRS4s0FhKarsS2TmRQJb\nhjSxrw+zQPRQ8qIZ1NdMj88bhCb3A31SRyPIHOqMTfcsRj8xirEgqSEzDr6IcUvs\nB4PPMLpF+aXyY1w2/GpGYeeoew==\n-----END PRIVATE KEY-----\n"
    }),
    databaseURL: "https://red-central.firebaseio.com"
});
function firebaseInstance() {
    return firebaseAdmin;
}
exports.firebaseInstance = firebaseInstance;
