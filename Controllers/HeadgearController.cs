using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto.Headgear;
using dotnet6_vite.Services;
using dotnet6_vite.Helpers;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class HeadgearController : ControllerBase
{
    private readonly IHeadgearService _headgearService;
    
    public HeadgearController(IHeadgearService headgearService)
    {
        _headgearService = headgearService;
    }
    
    [HttpGet(Name = "GetAllHeadgear")]
    public IActionResult GetAllHeadgear()
    {
        return Ok(new
        {
            message = "Headgear retrieved successfully",
            data = _headgearService.GetAllHeadgear()
        });
    }
    
    [HttpGet(Name = "GetHeadgearById")]
    public IActionResult GetHeadgearById(Guid id)
    {
        return Ok(new
        {
            message = "Headgear retrieved successfully",
            data = _headgearService.GetHeadgearById(id)
        });
    }
    
    [HttpPost(Name = "CreateHeadgear")]
    public IActionResult CreateHeadgear([FromBody] NewHeadgearDto headgear)
    {
        return Ok(new
        {
            message = "Headgear created successfully",
            data = _headgearService.CreateHeadgear(headgear)
        });
    }
    
    [HttpDelete(Name = "DeleteHeadgear")]
    public IActionResult DeleteHeadgear(Guid id)
    {
        _headgearService.DeleteHeadgear(id);
        return Ok(new
        {
            message = "Headgear deleted successfully",
        });
    }
}