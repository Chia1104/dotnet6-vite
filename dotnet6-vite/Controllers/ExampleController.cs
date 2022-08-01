using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Entities;
using dotnet6_vite.Dto;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExampleController
{
    private readonly ILogger<ExampleController> _logger;
    
    public ExampleController(ILogger<ExampleController> logger)
    {
        _logger = logger;
    }
    
    [HttpPost(Name = "PostNewExample")]
    public IActionResult PostNewExample(NewExample exampleDto)
    {
        var example = new Example();
        example.id = System.Guid.NewGuid();
        example.name = exampleDto.name;
        example.email = exampleDto.email;
        example.created_at = DateTime.Now;

        return null;
    }
}