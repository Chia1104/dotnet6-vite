using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Armor;

namespace dotnet6_vite.Services;

public interface IArmorService
{
    Armor CreateArmor(NewArmorDto armor);
    Armor GetArmorById(Guid id);
    IEnumerable<Armor> GetAllArmor();
    void DeleteArmor(Guid id);
}

public class ArmorService : IArmorService
{
    private readonly IArmorRepository _armorRepository;
    private readonly IRepository _repository;
    private readonly IMapper _mapper;

    public ArmorService(IArmorRepository armorRepository, IMapper mapper, IRepository repository)
    {
        _armorRepository = armorRepository;
        _mapper = mapper;
        _repository = repository;
    }

    public Armor CreateArmor(NewArmorDto armor)
    {
        return _armorRepository.Create(armor);
    }
    
    public Armor GetArmorById(Guid id)
    {
        return _armorRepository.GetById(id);
    }
    
    public IEnumerable<Armor> GetAllArmor()
    {
        return _armorRepository.GetAll();
    }
    
    public void DeleteArmor(Guid id)
    {
        var data = _armorRepository.GetById(id);
        if (data == null) throw new KeyNotFoundException("Armor not found"); 
        _repository.GetContext().Armors.Remove(data);
        _repository.GetContext().SaveChanges();
    }
}