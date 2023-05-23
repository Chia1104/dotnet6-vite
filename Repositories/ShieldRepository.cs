using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Shield;

namespace dotnet6_vite.Repositories;

public interface IShieldRepository
{
    IEnumerable<Shield> GetAll();
    Shield GetById(Guid id);
    Shield Create(NewShieldDto shield);
}

public class ShieldRepository : IShieldRepository
{
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public ShieldRepository(IMapper mapper, IRepository repository)
    {
        _mapper = mapper;
        _repository = repository;
    }
    
    public IEnumerable<Shield> GetAll()
    {
        return _repository.GetContext().Shields.ToList();
    }
    
    public Shield GetById(Guid id)
    {
        return _repository.GetContext().Shields.Find(id);
    }
    
    public Shield Create(NewShieldDto shield)
    {
        var entity = _mapper.Map<Shield>(shield);
        _repository.GetContext().Shields.Add(entity);
        _repository.GetContext().SaveChanges();
        return entity;
    }
}