using dotnet6_vite.Entities;
using AutoMapper;
using dotnet6_vite.Dto.User;
using dotnet6_vite.Helpers;
using Microsoft.EntityFrameworkCore;

namespace dotnet6_vite.Repositories;

public interface IUserRepository
{
    User GetByEmail(string email);
    User GetById(Guid id);
    IEnumerable<User> GetAll();
    Task<User> UpdateUserArmor(Guid userId, Guid armorId);
    Task<User> RemoveUserArmor(Guid userId);
    Task<User> UpdateUserWeapon(Guid userId, Guid weaponId);
    Task<User> RemoveUserWeapon(Guid userId);
    Task<User> UpdateUserShield(Guid userId, Guid shieldId);
    Task<User> RemoveUserShield(Guid userId);
    Task<User> UpdateUserHeadgear(Guid userId, Guid headgearId);
    Task<User> RemoveUserHeadgear(Guid userId);
}

public class UserRepository : IUserRepository
{
    private readonly IRepository _repository;
    private readonly IMapper _mapper;
    
    public UserRepository(IMapper mapper, IRepository repository)
    {
        _mapper = mapper;
        _repository = repository;
    }
    
    public User GetByEmail(string email)
    {
        return _repository.GetContext().Users
            .Where(u => u.Email == email)
            .FirstOrDefault();
    }
    
    public User GetById(Guid id)
    {
        return _repository.GetContext().Users
            .Where(u => u.UserId == id)
            .Include(u => u.Armor)
            .Include(u => u.Headgear)
            .Include(u => u.Shield)
            .Include(u => u.Weapon)
            .FirstOrDefault();
    }
    
    public IEnumerable<User> GetAll()
    {
        return _repository.GetContext().Users
            .Where(u => u.IsActive)
            .Include(u => u.Armor)
            .Include(u => u.Headgear)
            .Include(u => u.Shield)
            .Include(u => u.Weapon)
            .ToList();
    }

    public async Task<User> UpdateUserArmor(Guid userId, Guid armorId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        var armor = await _repository.GetContext().Armors.FindAsync(armorId);
        if (armor == null) throw new KeyNotFoundException("Armor not found");
        var _armor = _mapper.Map<UserArmor>(new UpdateUserArmorDto(
            armor.Name,
            armor.Description,
            armor.Image,
            armor.Defense,
            armor.Heaviness,
            armor.Level
        ));
        user.Armor = _armor;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> RemoveUserArmor(Guid userId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        user.Armor = null;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> UpdateUserHeadgear(Guid userId, Guid headgearId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        var headgear = await _repository.GetContext().Headgears.FindAsync(headgearId);
        if (headgear == null) throw new KeyNotFoundException("Headgear not found");
        var _headgear = _mapper.Map<UserHeadgear>(new UpdateUserHeadgearDto(
            headgear.Name,
            headgear.Description,
            headgear.Image,
            headgear.Defense,
            headgear.Level,
            headgear.Heaviness
        ));
        user.Headgear = _headgear;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> RemoveUserHeadgear(Guid userId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        user.Headgear = null;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> UpdateUserShield(Guid userId, Guid shieldId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        var shield = await _repository.GetContext().Shields.FindAsync(shieldId);
        if (shield == null) throw new KeyNotFoundException("Shield not found");
        var _shield = _mapper.Map<UserShield>(new UpdateUserShieldDto(
            shield.Name,
            shield.Description,
            shield.Image,
            shield.Defense,
            shield.Attack,
            shield.Heaviness,
            shield.Level
        ));
        user.Shield = _shield;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> RemoveUserShield(Guid userId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        user.Shield = null;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> UpdateUserWeapon(Guid userId, Guid weaponId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        var weapon = await _repository.GetContext().Weapons.FindAsync(weaponId);
        if (weapon == null) throw new KeyNotFoundException("Weapon not found");
        var _weapon = _mapper.Map<UserWeapon>(new UpdateUserWeaponDto(
            weapon.Name,
            weapon.Description,
            weapon.Image,
            weapon.Defense,
            weapon.Attack,
            weapon.Heaviness,
            weapon.Level,
            weapon.Category
        ));
        user.Weapon = _weapon;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
    
    public async Task<User> RemoveUserWeapon(Guid userId)
    {
        var user = await _repository.GetContext().Users.FindAsync(userId);
        if (user == null) throw new KeyNotFoundException("User not found");
        user.Weapon = null;
        await _repository.GetContext().SaveChangesAsync();
        return user;
    }
}