using dotnet6_vite.Helpers;
using dotnet6_vite.Dto.User;
using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;
using AutoMapper;
using BCrypt.Net;

namespace dotnet6_vite.Services;

public interface IAuthService
{
    AuthResultDto Login(LoginDto login);
    AuthResultDto Register(RegisterDto register);
    TokenDetailsDto GetUserDetails(string accessToken);
}

public class AuthService : IAuthService
{
    private readonly IAuthRepository _authRepository;
    private readonly IUserRepository _userRepository;
    private readonly IRepository _repository;
    private readonly IMapper _mapper;

    public AuthService(IAuthRepository authRepository, IUserRepository userRepository, IRepository repository, IMapper mapper)
    {
        _authRepository = authRepository;
        _userRepository = userRepository;
        _repository = repository;
        _mapper = mapper;
    }

    public AuthResultDto Login(LoginDto login)
    {
        var user = _userRepository.GetByEmail(login.Email);
        
        if (user == null || !BCrypt.Net.BCrypt.Verify(login.Password, user.Password))
            throw new UnauthorizedAccessException("Invalid credentials");

        var accessToken = _authRepository.GenerateAccessToken(user);
        
        return new AuthResultDto(user, accessToken);
    }
    
    public AuthResultDto Register(RegisterDto register)
    {
        if (_repository.GetContext().Users.Any(x => x.Email == register.Email))
            throw new AppException("Email already exists");

        var user = _mapper.Map<User>(register);
        user.Password = BCrypt.Net.BCrypt.HashPassword(register.Password);
        _repository.GetContext().Users.Add(user);
        _repository.GetContext().SaveChanges();
        
        var accessToken = _authRepository.GenerateAccessToken(user);
        return new AuthResultDto(user, accessToken);
    }
    
    public TokenDetailsDto GetUserDetails(string accessToken)
    {
        return _authRepository.DecodeAccessToken(accessToken);
    }
}