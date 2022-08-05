using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Headgear;

namespace dotnet6_vite.Services;

public interface IHeadgearService
{
    Headgear GetHeadgearById(Guid id);
    IEnumerable<Headgear> GetAllHeadgear();
    Headgear CreateHeadgear(NewHeadgearDto headgear);
    void DeleteHeadgear(Guid id);
}

public class HeadgearService : IHeadgearService
{
    private readonly IHeadgearRepository _headgearRepository;
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public HeadgearService(IHeadgearRepository headgearRepository, IRepository repository, IMapper mapper)
    {
        _headgearRepository = headgearRepository;
        _repository = repository;
        _mapper = mapper;
    }
    
    public Headgear GetHeadgearById(Guid id)
    {
        return _headgearRepository.GetById(id);
    }
    
    public Headgear CreateHeadgear(NewHeadgearDto headgear)
    {
        return _headgearRepository.Create(headgear);
    }
    
    public IEnumerable<Headgear> GetAllHeadgear()
    {
        return _headgearRepository.GetAll();
    }
    
    public void DeleteHeadgear(Guid id)
    {
        var headgear = _headgearRepository.GetById(id);
        if (headgear == null) throw new KeyNotFoundException("Headgear not found");
        _repository.GetContext().Headgears.Remove(headgear);
        _repository.GetContext().SaveChanges();
    }
}