export class ClientBase {
  protected transformOptions(options: any): Promise<any> {
    const authToken = localStorage.getItem('token');
    options = {
      ...options,
      withCredentials: true
    }
    options.headers = options.headers.append(
      'Authorization',
      'Bearer ' + authToken
    );
    console.log('Bearer: ' + authToken);
    return Promise.resolve(options);
  }
}
