using Microsoft.AspNetCore.Mvc;

namespace dotnet6_vite.Services;

using dotnet6_vite.Dto;
using dotnet6_vite.Repositories;

public interface IExampleService
{
    void CreateExample(NewExample exampleDto);
}

public class ExampleService : IExampleService
{
    private readonly IExampleRepository _exampleRepository;

    public ExampleService(IExampleRepository exampleRepository)
    {
        _exampleRepository = exampleRepository;
    }
    
    public void CreateExample(NewExample exampleDto)
    {
        _exampleRepository.Add(exampleDto);
    }
}