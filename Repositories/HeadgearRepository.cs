using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Headgear;

namespace dotnet6_vite.Repositories;

public interface IHeadgearRepository
{
    Headgear GetById(Guid id);
    IEnumerable<Headgear> GetAll();
    Headgear Create(NewHeadgearDto headgear);
}

public class HeadgearRepository : IHeadgearRepository
{
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public HeadgearRepository(IMapper mapper, IRepository repository)
    {
        _mapper = mapper;
        _repository = repository;
    }
    
    public IEnumerable<Headgear> GetAll()
    {
        return _repository.GetContext().Headgears.ToList();
    }
    
    public Headgear GetById(Guid id)
    {
        return _repository.GetContext().Headgears.Find(id);
    }
    
    public Headgear Create(NewHeadgearDto headgear)
    {
        var entity = _mapper.Map<Headgear>(headgear);
        _repository.GetContext().Headgears.Add(entity);
        _repository.GetContext().SaveChanges();
        return entity;
    }
}