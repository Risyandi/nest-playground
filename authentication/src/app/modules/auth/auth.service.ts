import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAuthDto, UpdateAuthDto } from './dto/auth.dto';
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
      console.log('risyandi ~ AuthService ~ create ~ data:', data),
    );

    // return createdAuthentication;
    return createdAuthentication;
  }

  // find all data
  findAll() {
    const dataFindAllAuthentication = this.authModel.find().exec();
    dataFindAllAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ findAll ~ data:', data),
    );

    // return findAllAuthentication
    return dataFindAllAuthentication;
  }

  // find data by id
  findOne(id: number) {
    const dataFindOneAuthentication = this.authModel.findById(id).exec();
    dataFindOneAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ findOne ~ data:', data),
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
      console.log('risyandi ~ AuthService ~ update ~ data:', data),
    );

    // return updateAuthentication
    return dataUpdateAuthentication;
  }

  // remove data by id
  remove(id: number) {
    const dataRemoveAuthentication = this.authModel.findByIdAndDelete(id);
    dataRemoveAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ remove ~ data:', data),
    );

    // return removeAuthentication
    return dataRemoveAuthentication;
  }
}
