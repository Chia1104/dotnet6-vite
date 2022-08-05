using dotnet6_vite.Helpers;

namespace dotnet6_vite.Repositories;

public interface IRepository
{
    DataContext GetContext();
}

public class Repository : IRepository
{
    private readonly DataContext _context;

    public Repository(DataContext context)
    {
        _context = context;
    }
    
    public DataContext GetContext()
    {
        return _context;
    }
}