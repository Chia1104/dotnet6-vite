using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Weapon;

namespace dotnet6_vite.Repositories;

public interface IWeaponRepository
{
    IEnumerable<Weapon> GetAll();
    Weapon GetById(Guid id);
    Weapon Create(NewWeaponDto weapon);
}

public class WeaponRepository : IWeaponRepository
{
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public WeaponRepository(IMapper mapper, IRepository repository)
    {
        _mapper = mapper;
        _repository = repository;
    }
    
    public IEnumerable<Weapon> GetAll()
    {
        return _repository.GetContext().Weapons.ToList();
    }
    
    public Weapon GetById(Guid id)
    {
        return _repository.GetContext().Weapons.Find(id);
    }
    
    public Weapon Create(NewWeaponDto weapon)
    {
        var entity = _mapper.Map<Weapon>(weapon);
        _repository.GetContext().Weapons.Add(entity);
        _repository.GetContext().SaveChanges();
        return entity;
    }
}