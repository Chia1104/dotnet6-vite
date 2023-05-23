using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Weapon;

namespace dotnet6_vite.Services;

public interface IWeaponService
{
    IEnumerable<Weapon> GetAllWeapon();
    Weapon GetWeaponById(Guid id);
    Weapon CreateWeapon(NewWeaponDto weapon);
    void DeleteWeapon(Guid id);
}

public class WeaponService : IWeaponService
{
    private readonly IWeaponRepository _weaponRepository;
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public WeaponService(IWeaponRepository weaponRepository, IRepository repository, IMapper mapper)
    {
        _weaponRepository = weaponRepository;
        _repository = repository;
        _mapper = mapper;
    }
    
    public IEnumerable<Weapon> GetAllWeapon()
    {
        return _weaponRepository.GetAll();
    }
    
    public Weapon GetWeaponById(Guid id)
    {
        return _weaponRepository.GetById(id);
    }
    
    public Weapon CreateWeapon(NewWeaponDto weapon)
    {
        return _weaponRepository.Create(weapon);
    }
    
    public void DeleteWeapon(Guid id)
    {
        var weapon = _weaponRepository.GetById(id);
        if (weapon == null) throw new KeyNotFoundException("Weapon not found");
        _repository.GetContext().Weapons.Remove(weapon);
        _repository.GetContext().SaveChanges();
    }
}