import { Router } from 'express'
import { login } from '../controllers/login.controller'
import { getCredentials, userLog, consultarRFC, evidences, changestatus,
    getIpRfc, ejecutaProtocolos,
    token, getPerformance, datosOSPFv2, validacionLLDP, validateVRRP, validacionInterfaces,
    down, UP2COMMIT, DOWN2COMMIT, up, validacionacceso, obtenerModeloVersionOLT
} from '../controllers/proxy.controller'

const router = Router();

router.route('/rings-api/rings/getPerformance').get(getPerformance);
router.route('/rings-api/rings/token').get(token);
router.route('/rings-api/rings/getCredentials').get(getCredentials);
router.route('/rings-api/admin/userLog').get(userLog);
router.route('/pdrservice/ticketAPI/consultarRFC').get(consultarRFC);
router.route('/rings-api/rings/evidences').get(evidences);
router.route('/rings-api/rings/changestatus').get(changestatus);
router.route('/rings-api/rings/getIpRfc').get(getIpRfc);
router.route('/pdrservice/proxyStep/validacionacceso').post(validacionacceso);
router.route('/pdrservice/proxyStep/datosOSPFv2').post(datosOSPFv2);
router.route('/pdrservice/proxyStep/datosBgpSumm').get(ejecutaProtocolos);
router.route('/pdrservice/proxyStep/datosBgpAllSumm').get(ejecutaProtocolos);
router.route('/pdrservice/proxyStep/validacionLLDP').get(validacionLLDP);
router.route('/pdrservice/proxyModels/validateVRRP').post(validateVRRP);
router.route('/pdrservice/proxyStep/servicioVoz').get(ejecutaProtocolos);
router.route('/pdrservice/proxyStep/servicioInternet').get(ejecutaProtocolos);
router.route('/pdrservice/proxyStep/validacionMPLS').get(ejecutaProtocolos);
router.route('/pdrservice/proxyStep/validacionInterfaces').get(validacionInterfaces);
router.route('/pdrservice/proxyStep/down').get(down);
router.route('/pdrservice/proxyStep/DOWN2COMMIT').get(DOWN2COMMIT);
router.route('/pdrservice/proxyStep/UP2COMMIT').get(UP2COMMIT);
router.route('/pdrservice/proxyStep/up').get(up);

router.route('/pdrservice/anillos/obtenerModeloVersionOLT').post(obtenerModeloVersionOLT);







export default router;
