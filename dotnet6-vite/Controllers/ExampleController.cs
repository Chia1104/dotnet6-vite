using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto;
using dotnet6_vite.Services;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExampleController : ControllerBase
{
    private IExampleService _exampleService;

    public ExampleController(IExampleService exampleService)
    {
        _exampleService = exampleService;
    }

    [HttpPost(Name = "PostNewExample")]
    public IActionResult PostNewExample(NewExample exampleDto)
    {
        _exampleService.CreateExample(exampleDto);
        return Ok(new { message = "Example created" });
    }
}