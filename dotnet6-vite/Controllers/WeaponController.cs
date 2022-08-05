using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto.Weapon;
using dotnet6_vite.Services;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class WeaponController : ControllerBase
{
    private readonly IWeaponService _weaponService;
    
    public WeaponController(IWeaponService weaponService)
    {
        _weaponService = weaponService;
    }
    
    [HttpGet(Name = "GetAllWeapon")]
    public IActionResult GetAllWeapon()
    {
        return Ok(new
        {
            message = "Weapon retrieved successfully",
            data = _weaponService.GetAllWeapon()
        });
    }
    
    [HttpGet(Name = "GetWeaponById")]
    public IActionResult GetWeaponById(Guid id)
    {
        return Ok(new
        {
            message = "Weapon retrieved successfully",
            data = _weaponService.GetWeaponById(id)
        });
    }
    
    [HttpPost(Name = "CreateWeapon")]
    public IActionResult CreateWeapon([FromBody] NewWeaponDto weapon)
    {
        return Ok(new
        {
            message = "Weapon created successfully",
            data = _weaponService.CreateWeapon(weapon)
        });
    }
    
    [HttpDelete(Name = "DeleteWeapon")]
    public IActionResult DeleteWeapon(Guid id)
    {
        _weaponService.DeleteWeapon(id);
        return Ok(new
        {
            message = "Weapon deleted successfully",
        });
    }
}