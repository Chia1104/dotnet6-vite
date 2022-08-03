namespace dotnet6_vite.Repositories;

using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto;
using dotnet6_vite.Helpers;


public interface IExampleRepository
{
    void Add(NewExample example);
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
    
    public void Add(NewExample newExample)
    {
        var example = _mapper.Map<Example>(newExample);
        _context.Add(example);
        _context.SaveChanges();
    }
}