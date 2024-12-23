import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUsersDto, UpdateUsersDto } from './dto/users.dto';
import { Users } from '../../../core/interfaces/users.interfaces';

@Injectable()
export class UsersService {
  // constructor injection model
  constructor(
    @Inject('USERS_MODEL') private readonly usersModel: Model<Users>,
  ) {}

  // create data
  create(createUsersDto: CreateUsersDto) {
    const createdAuthentication = this.usersModel.create(createUsersDto);
    createdAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ create ~ data:', data),
    );

    // return createdAuthentication;
    return createdAuthentication;
  }

  // find all data
  findAll() {
    const dataFindAllAuthentication = this.usersModel.find().exec();
    dataFindAllAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ findAll ~ data:', data),
    );

    // return findAllAuthentication
    return dataFindAllAuthentication;
  }

  // find data by id
  findOne(id: number) {
    const dataFindOneAuthentication = this.usersModel.findById(id).exec();
    dataFindOneAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ findOne ~ data:', data),
    );

    // return findOneAuthentication
    return dataFindOneAuthentication;
  }

  // updated data by id
  update(id: number, updateUsersDto: UpdateUsersDto) {
    const dataUpdateAuthentication = this.usersModel
      .findByIdAndUpdate(id, updateUsersDto)
      .exec();
    dataUpdateAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ update ~ data:', data),
    );

    // return updateAuthentication
    return dataUpdateAuthentication;
  }

  // remove data by id
  remove(id: number) {
    const dataRemoveAuthentication = this.usersModel.findByIdAndDelete(id);
    dataRemoveAuthentication.then((data) =>
      console.log('risyandi ~ AuthService ~ remove ~ data:', data),
    );

    // return removeAuthentication
    return dataRemoveAuthentication;
  }
}
