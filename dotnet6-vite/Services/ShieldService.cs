using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Shield;

namespace dotnet6_vite.Services;

public interface IShieldService
{
    IEnumerable<Shield> GetAllShield();
    Shield GetShieldById(Guid id);
    Shield CreateShield(NewShieldDto shield);
    void DeleteShield(Guid id);
}

public class ShieldService : IShieldService
{
    private readonly IShieldRepository _shieldRepository;
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public ShieldService(IShieldRepository shieldRepository, IRepository repository, IMapper mapper)
    {
        _shieldRepository = shieldRepository;
        _repository = repository;
        _mapper = mapper;
    }
    
    public IEnumerable<Shield> GetAllShield()
    {
        return _shieldRepository.GetAll();
    }
    
    public Shield GetShieldById(Guid id)
    {
        return _shieldRepository.GetById(id);
    }
    
    public Shield CreateShield(NewShieldDto shield)
    {
        return _shieldRepository.Create(shield);
    }
    
    public void DeleteShield(Guid id)
    {
        var shield = _shieldRepository.GetById(id);
        if (shield == null) throw new KeyNotFoundException("Shield not found");
        _repository.GetContext().Shields.Remove(shield);
        _repository.GetContext().SaveChanges();
    }
}