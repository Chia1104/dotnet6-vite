namespace dotnet6_vite.Repositories;

using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.Example;
using dotnet6_vite.Helpers;


public interface IExampleRepository
{
    Example Add(NewExample example);
    IEnumerable<Example> GetAll();
    Example GetById(Guid id);
}
public class ExampleRepository : IExampleRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public ExampleRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public Example Add(NewExample newExample)
    {
        if (_context.Examples.Any(x => x.email == newExample.email))
            throw new AppException("User with the email '" + newExample.email + "' already exists"); 
        
        var example = _mapper.Map<Example>(newExample);
        _context.Examples.Add(example);
        _context.SaveChanges();
        return example;
    }
    
    public IEnumerable<Example> GetAll()
    {
        return _context.Examples.ToList();
    }
    
    public Example GetById(Guid id)
    {
        var data = _context.Examples.Find(id);
        if (data == null)
            throw new KeyNotFoundException("Example not found");
        return data;
    }
}