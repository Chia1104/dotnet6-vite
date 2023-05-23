using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;

namespace dotnet6_vite.Services;

public interface IUserService
{
    User GetUserById(Guid id);
    IEnumerable<User> GetAllUser();
    Task<User> UpdateUserArmor(string token, Guid armorId);
    Task<User> RemoveUserArmor(string token);
    Task<User> UpdateUserWeapon(string token, Guid weaponId);
    Task<User> RemoveUserWeapon(string token);
    Task<User> UpdateUserShield(string token, Guid shieldId);
    Task<User> RemoveUserShield(string token);
    Task<User> UpdateUserHeadgear(string token, Guid headgearId);
    Task<User> RemoveUserHeadgear(string token);
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
    
    public async Task<User> UpdateUserArmor(string token, Guid armorId)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.UpdateUserArmor(userId, armorId);
    }
    
    public async Task<User> RemoveUserArmor(string token)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.RemoveUserArmor(userId);
    }
    
    public async Task<User> UpdateUserWeapon(string token, Guid weaponId)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.UpdateUserWeapon(userId, weaponId);
    }
    
    public async Task<User> RemoveUserWeapon(string token)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.RemoveUserWeapon(userId);
    }
    
    public async Task<User> UpdateUserShield(string token, Guid shieldId)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.UpdateUserShield(userId, shieldId);
    }
    
    public async Task<User> RemoveUserShield(string token)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.RemoveUserShield(userId);
    }
    
    public async Task<User> UpdateUserHeadgear(string token, Guid headgearId)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.UpdateUserHeadgear(userId, headgearId);
    }
    
    public async Task<User> RemoveUserHeadgear(string token)
    {
        var userId = Guid.Parse(_authRepository.DecodeAccessToken(token).UserId);
        return await _userRepository.RemoveUserHeadgear(userId);
    }
}