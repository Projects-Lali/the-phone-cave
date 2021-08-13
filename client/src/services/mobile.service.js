import axios from 'axios'
class MobilesService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/phones'
        })
    }
    getMobiles = () => this.app.get('/')
    getDetails = (mobile_id) => this.app.get(`/${mobile_id}`)
}
export default MobilesService