using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto.Example;
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
        return Ok(new { message = "Example created", data = _exampleService.CreateExample(exampleDto) });
    }
    
    [HttpGet(Name = "GetAllExamples")]
    public IActionResult GetAllExamples()
    {
        return Ok(new { message = "Examples retrieved", data = _exampleService.GetAllExamples() });
    }
    
    [HttpGet(Name = "GetExampleById")]
    public IActionResult GetExampleById(Guid id)
    {
        return Ok(new { message = "Example retrieved", data = _exampleService.GetExampleById(id) });
    }
    
    [HttpPut(Name = "UpdateExample")]
    public IActionResult UpdateExample(Guid id, [FromForm] UpdateExample exampleDto)
    {
        return Ok(new { message = "Example updated", data = _exampleService.UpdateExample(id, exampleDto) });
    }
    
    [HttpDelete(Name = "DeleteExample")]
    public IActionResult DeleteExample(Guid id)
    {
        _exampleService.DeleteExample(id);
        return Ok(new { message = "Example deleted"});
    }
}