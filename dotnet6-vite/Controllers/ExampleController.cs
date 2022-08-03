using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto;
using dotnet6_vite.Services;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class ExampleController : ControllerBase
{
    private readonly IExampleService _exampleService;

    public ExampleController(IExampleService exampleService)
    {
        _exampleService = exampleService;
    }

    [HttpPost(Name = "PostNewExample")]
    public IActionResult PostNewExample([FromForm] NewExample exampleDto)
    {
        _exampleService.CreateExample(exampleDto);
        return Ok(new { message = "Example created" });
    }
}