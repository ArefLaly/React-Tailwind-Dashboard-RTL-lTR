import { AxiosInstance } from "axios";
import { api } from "./api";
interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;
  api: AxiosInstance;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.api = api;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = api.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  delete(id: number) {
    return api.delete(this.endpoint + "/" + id);
  }
  create<T>(entity: T) {
    return api.post(this.endpoint, entity);
  }
  update<T extends Entity>(entity: T) {
    return api.patch(this.endpoint + "/" + entity.id, entity);
  }

  post<T>(entity: T) {
    return api.post(this.endpoint, entity);
  }
}
export default HttpService;
