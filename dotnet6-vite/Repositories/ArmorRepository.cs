using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Armor;

namespace dotnet6_vite.Repositories;

public interface IArmorRepository
{
    IEnumerable<Armor> GetAll();
    Armor GetById(Guid id);
    Armor Create(NewArmorDto armor);
}

public class ArmorRepository : IArmorRepository
{
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public ArmorRepository(IMapper mapper, IRepository repository)
    {
        _mapper = mapper;
        _repository = repository;
    }

    public IEnumerable<Armor> GetAll()
    {
        return _repository.GetContext().Armors.ToList();
    }
    
    public Armor GetById(Guid id)
    {
        return _repository.GetContext().Armors.Find(id);
    }
    
    public Armor Create(NewArmorDto armor)
    {
        var entity = _mapper.Map<Armor>(armor);
        _repository.GetContext().Armors.Add(entity);
        _repository.GetContext().SaveChanges();
        return entity;
    }
}