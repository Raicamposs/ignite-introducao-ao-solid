import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body;
    try {
      const user = await this.createUserUseCase.execute({ email, name });
      return response.status(201).send(user);
    } catch (error) {
      const { message } = error;
      return response.status(400).send({ error: message });
    }
  }
}

export { CreateUserController };
