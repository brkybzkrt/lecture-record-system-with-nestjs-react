export interface CommonInterface<T>{
    findById(id: string);
    findByCode(code: string);
    findAll();
    create(data:T|any);
    delete(id: string);
    update(id: string, data:T|any);
  }
  