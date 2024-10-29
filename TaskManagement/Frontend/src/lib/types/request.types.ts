export type ApiResponse<T> =
	| {
			json: null;
			error: {
				message: string;
				[key: string]: string;
			};
	  }
	| {
			json: T;
			error: null;
	  }
	  
	| {
         json: null;
		 error: null;
	  }
	 ;

export type Filter = {
	key: string;
	value: string | number | boolean | undefined;
};

export type Cursor = {
	column: string;
	value: number | undefined;
};

export type Sort = {
	column: string;
	order: 'asc' | 'desc';
};

export type InfiniteScrollResult<T> = {
	data : T,
	total: number,
	nextCursor: string | null 
}
export type PaginationResult<T> = {data:T[],total:number};
