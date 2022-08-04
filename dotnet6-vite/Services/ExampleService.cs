using AutoMapper;
using dotnet6_vite.Helpers;

namespace dotnet6_vite.Services;

using dotnet6_vite.Dto.Example;
using dotnet6_vite.Repositories;
using dotnet6_vite.Entities;

public interface IExampleService
{
    Example CreateExample(NewExample exampleDto);
    Example GetExampleById(Guid id);
    Example UpdateExample(Guid id, UpdateExample exampleDto);
    void DeleteExample(Guid id);
    IEnumerable<Example> GetAllExamples();
}

public class ExampleService : IExampleService
{
    private readonly IExampleRepository _exampleRepository;
    private readonly IMapper _mapper;
    private DataContext _context;

    public ExampleService(IExampleRepository exampleRepository, IMapper mapper, DataContext context)
    {
        _exampleRepository = exampleRepository;
        _mapper = mapper;
        _context = context;
    }

    public Example CreateExample(NewExample exampleDto)
    {
        return _exampleRepository.Add(exampleDto);
    }
    
    public Example GetExampleById(Guid id)
    {
        return _exampleRepository.GetById(id);
    }
    
    public Example UpdateExample(Guid id, UpdateExample exampleDto)
    {
        var data = _exampleRepository.GetById(id);
        _mapper.Map(exampleDto, data);
        _context.Examples.Update(data);
        _context.SaveChanges();
        return data;
    }
    
    public void DeleteExample(Guid id)
    {
        var data = _exampleRepository.GetById(id);
        _context.Examples.Remove(data);
        _context.SaveChanges();
    }
    
    public IEnumerable<Example> GetAllExamples()
    {
        return _exampleRepository.GetAll();
    } 
}