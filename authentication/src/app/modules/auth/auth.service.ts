import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Authentication } from '../../../core/interfaces/auth.interfaces';

@Injectable()
export class AuthService {
  // constructor injection model
  constructor(
    @Inject('AUTH_MODEL') private readonly authModel: Model<Authentication>,
  ) {}

  // create data
  create(createAuthDto: CreateAuthDto) {
    const createdAuthentication = this.authModel.create(createAuthDto);
    createdAuthentication.then((data) =>
      console.log(data, 'createdAuthentication'),
    );

    // return createdAuthentication;
    return createdAuthentication;
  }

  // find all data
  findAll() {
    const dataFindAllAuthentication = this.authModel.find().exec();
    dataFindAllAuthentication.then((data) =>
      console.log(data, 'findAllAuthentication'),
    );

    // return findAllAuthentication
    return dataFindAllAuthentication;
  }

  // find data by id
  findOne(id: number) {
    const dataFindOneAuthentication = this.authModel.findById(id).exec();
    dataFindOneAuthentication.then((data) =>
      console.log(data, 'findOneAuthentication'),
    );

    // return findOneAuthentication
    return dataFindOneAuthentication;
  }

  // updated data by id
  update(id: number, updateAuthDto: UpdateAuthDto) {
    const dataUpdateAuthentication = this.authModel
      .findByIdAndUpdate(id, updateAuthDto)
      .exec();
    dataUpdateAuthentication.then((data) =>
      console.log(data, 'updateAuthentication'),
    );

    // return updateAuthentication
    return dataUpdateAuthentication;
  }

  // remove data by id
  remove(id: number) {
    const dataRemoveAuthentication = this.authModel.findByIdAndDelete(id);
    dataRemoveAuthentication.then((data) =>
      console.log(data, 'removeAuthentication'),
    );

    // return removeAuthentication
    return dataRemoveAuthentication;
  }
}
