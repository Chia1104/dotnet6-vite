using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;

namespace dotnet6_vite.Services;

public interface IUserService
{
    User GetUserById(Guid id);
    IEnumerable<User> GetAllUser();
    User UpdateUserArmor(string token, Guid armorId);
    void ClearUserArmor(string token);
}

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IAuthRepository _authRepository;
    
    public UserService(IUserRepository userRepository, IAuthRepository authRepository)
    {
        _userRepository = userRepository;
        _authRepository = authRepository;
    }

    public User GetUserById(Guid id)
    {
        return _userRepository.GetById(id);
    }
    
    public IEnumerable<User> GetAllUser()
    {
        return _userRepository.GetAll();
    }
    
    public User UpdateUserArmor(string token, Guid armorId)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return _userRepository.UpdateUserArmor(userId, armorId);
    }
    
    public void ClearUserArmor(string token)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        _userRepository.ClearUserArmor(userId);
    }
}