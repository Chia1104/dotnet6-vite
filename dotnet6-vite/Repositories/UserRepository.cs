using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.User;
using dotnet6_vite.Helpers;

namespace dotnet6_vite.Repositories;

public interface IUserRepository
{
    User GetByEmail(string email);
    User GetById(Guid id);
    IEnumerable<User> GetAll();
    User UpdateUserArmor(Guid userId, Guid armorId);
    void ClearUserArmor(Guid userId);
}

public class UserRepository : IUserRepository
{
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public UserRepository(IMapper mapper, IRepository repository)
    {
        _mapper = mapper;
        _repository = repository;
    }
    
    public User GetByEmail(string email)
    {
        return _repository.GetContext().Users
            .Where(u => u.Email == email)
            .FirstOrDefault();
    }
    
    public User GetById(Guid id)
    {
        return _repository.GetContext().Users.Find(id);
    }
    
    public IEnumerable<User> GetAll()
    {
        return _repository.GetContext().Users.ToList();
    }

    public User UpdateUserArmor(Guid userId, Guid armorId)
    {
        var user = _repository.GetContext().Users.Find(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        var armor = _repository.GetContext().Armors.Find(armorId);
        if (armor == null) throw new KeyNotFoundException("Armor not found");
        user.Armors.Remove(armor);
        user.Armors.Add(armor);
        _repository.GetContext().SaveChanges();
        return user;
    }
    
    public void ClearUserArmor(Guid userId)
    {
        var user = _repository.GetContext().Users.Find(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        user.Armors.Clear();
    }
}