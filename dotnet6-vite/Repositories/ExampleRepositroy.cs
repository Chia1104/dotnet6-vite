using Microsoft.EntityFrameworkCore;

namespace dotnet6_vite.Repositories;

using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto;


public interface IExampleRepository
{
    void Add(NewExample example);
}
public class ExampleRepositroy : IExampleRepository
{
    private DbContext _context;
    private IMapper _mapper;
    public ExampleRepositroy(DbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public void Add(NewExample newExample)
    {
        var example = _mapper.Map<Example>(newExample);
        _context.Add(newExample);
        _context.SaveChanges();
    }
}