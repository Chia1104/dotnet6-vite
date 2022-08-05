using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;

namespace dotnet6_vite.Services;

public interface IUserService
{
    User GetUserById(Guid id);
    IEnumerable<User> GetAllUser();
}

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    
    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public User GetUserById(Guid id)
    {
        return _userRepository.GetById(id);
    }
    
    public IEnumerable<User> GetAllUser()
    {
        return _userRepository.GetAll();
    }
}