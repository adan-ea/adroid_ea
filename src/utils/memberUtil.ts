import { GuildMember, PermissionFlagsBits, Role } from "discord.js";
import checkBotPermission from "./botUtil";

export function addRole(member: GuildMember, memberRole: Role | undefined) {
  // Check if the bot has the Manage Roles permission.
  if (checkBotPermission(member.guild, PermissionFlagsBits.ManageRoles)) {
    const hasRole = checkMemberRole(member, memberRole);

    if (!hasRole && memberRole) {
      member.roles.add(memberRole).catch(console.error);
    }
  }
}

export function removeRole(member: GuildMember, memberRole: Role) {
  // Check if the bot has the Manage Roles permission.
  if (checkBotPermission(member.guild, PermissionFlagsBits.ManageRoles)) {
    const hasRole = checkMemberRole(member, memberRole);

    if (hasRole) {
      member.roles.remove(memberRole).catch(console.error);
    }
  }
}

function checkMemberRole(member: GuildMember, role: Role | undefined) {
  return member && role && member.roles.cache.some(memberRoles => memberRoles.id === role.id);
}

export function checkMemberPermission(memberPermissions: any, permissionFlag: string[]) {
  return memberPermissions.has(permissionFlag);
}

export const OWNER_ID = "";
