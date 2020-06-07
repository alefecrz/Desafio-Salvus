import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  cpf: string;
  dateofbirth: Date;
  address: string;
  cep: string;
  city: string;
  state: string;
  cellphone: string;
  homephone: string;
}
class CreateUserService {
  public async execute({
    name,
    email,
    password,
    cpf,
    dateofbirth,
    address,
    cep,
    city,
    state,
    cellphone,
    homephone,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const userAlredyExists = await userRepository.findOne({
      where: { email },
    });

    if (userAlredyExists) throw new AppError('Email alredyy used.');

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
