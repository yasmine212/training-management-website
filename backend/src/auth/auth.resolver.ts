import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/auth.response';
import { RegisterInput } from './dto/register.input';
import { LoginInput } from './dto/login.input';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/jwt.guard';

/**
 * AuthResolver handles GraphQL authentication mutations and queries.
 * Provides user registration, login, and current user profile retrieval.
 */
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  /**
   * Mutation: Register a new user.
   * Creates a new user account with email, password, and profile information.
   * @param registerInput - User registration data (email, password, firstName, lastName)
   * @returns Promise<AuthResponse> - Contains JWT access token and user data
   */
  @Mutation(() => AuthResponse)
  async register(
    @Args('registerInput') registerInput: RegisterInput,
  ): Promise<AuthResponse> {
    return this.authService.register(registerInput);
  }

  /**
   * Mutation: User login.
   * Authenticates user with email and password, returns JWT token.
   * @param loginInput - Login credentials (email, password)
   * @returns Promise<AuthResponse> - Contains JWT access token and user data
   */
  @Mutation(() => AuthResponse)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<AuthResponse> {
    return this.authService.login(loginInput);
  }

  /**
   * Query: Get current user profile (protected).
   * Requires valid JWT token in Authorization header.
   * Guard: GqlAuthGuard validates JWT and extracts user from token.
   * @param user - Current authenticated user from JWT context
   * @returns Promise<User> - Current user profile data
   */
  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@Context('user') user: User): Promise<User> {
    return user;
  }
}
