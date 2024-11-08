import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Member {
  id: string;
  name: string;
  membershipNumber: number;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor() {}
  private members: Member[] = [];
  private membersSubject = new BehaviorSubject<Member[]>(this.members);

  getMembers() {
    return this.membersSubject.asObservable();
  }

  addMember(member: Member) {
    this.members.push(member);
    this.membersSubject.next(this.members);
  }

  removeMember(memberId: string) {
    this.members = this.members.filter((member) => member.id !== memberId);
    this.membersSubject.next(this.members);
  }
}
