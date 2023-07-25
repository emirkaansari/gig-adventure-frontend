import {backendApiService} from "src/services";
export default {
  registerUser: (data) => backendApiService.post('/register', data)
}
