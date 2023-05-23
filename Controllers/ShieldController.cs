using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto.Shield;
using dotnet6_vite.Services;
using dotnet6_vite.Helpers;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class ShieldController : ControllerBase
{
    private readonly IShieldService _shieldService;
    
    public ShieldController(IShieldService shieldService)
    {
        _shieldService = shieldService;
    }
    
    [HttpGet(Name = "GetAllShield")]
    public IActionResult GetAllShield()
    {
        return Ok(new
        {
            message = "Shield retrieved successfully",
            data = _shieldService.GetAllShield()
        });
    }
    
    [HttpGet(Name = "GetShieldById")]
    public IActionResult GetShieldById(Guid id)
    {
        return Ok(new
        {
            message = "Shield retrieved successfully",
            data = _shieldService.GetShieldById(id)
        });
    }
    
    [HttpPost(Name = "CreateShield")]
    public IActionResult CreateShield([FromBody] NewShieldDto shieldDto)
    {
        return Ok(new
        {
            message = "Shield created successfully",
            data = _shieldService.CreateShield(shieldDto)
        });
    }
    
    [HttpDelete(Name = "DeleteShield")]
    public IActionResult DeleteShield(Guid id)
    {
        _shieldService.DeleteShield(id);
        return Ok(new
        {
            message = "Shield deleted successfully",
        });
    }
}