using dotnet6_vite.Entities;
using AutoMapper;

namespace dotnet6_vite.Repositories;

public interface IUserRepository
{
    User GetByEmail(string email);
    User GetById(Guid id);
    IEnumerable<User> GetAll();
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
        return _repository.GetContext().Users.Where(
            u => u.Email == email
        ).FirstOrDefault();
    }
    
    public User GetById(Guid id)
    {
        return _repository.GetContext().Users.Find(id);
    }
    
    public IEnumerable<User> GetAll()
    {
        return _repository.GetContext().Users.ToList();
    }
}